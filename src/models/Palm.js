export const generateText = async (query = 'Who are you') => {
  try {
    const PALM_KEY = 'AIzaSyDHR0Bur7Kwj2O3nowF_nNf8xdY-w6O6-k'; // Replace with your actual API key
    const apiUrl =
      'https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': PALM_KEY,
      },
      body: JSON.stringify({
        prompt: {text: query},
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);
    return (
      data['candidates'][0].output.replaceAll('\n', '\n') ||
      "I can't understand what you're saying! Please rephrase it"
    );
  } catch (error) {
    // console.error('Error:', error.message);
    console.log(error);
    // return error.message;
  }
};
