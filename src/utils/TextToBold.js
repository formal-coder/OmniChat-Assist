// Let the message typed by the user is this
let msg =
  'Hello friends, *This is the bold text* and this is not but *this is also bold* ** *';

/**
 * @params firstIndex = index of the first * of the pair we are looking in the msg string
 *         secondIndex = index of the second * of the pair
 *         pairCount = to help us acknowledge that the pair *, we are looking for, is ready
 */
let firstIndex = 0,
  secondIndex = 0,
  pairCount = 0;

let i = 0;
while (true) {
  let c = msg.charAt(i);

  if (c == '*') {
    if (pairCount == 0) {
      pairCount += 1;
      firstIndex = i;
    } else if (pairCount == 1) {
      pairCount += 1;
      secondIndex = i;
    }
  }

  if (pairCount == 2) {
    // replacing first * with <b>
    msg = msg.substring(0, firstIndex) + '<b>' + msg.substring(firstIndex + 1);

    // replacing second * with </b>
    // increasing secondIndex by 2
    // because length of "msg" is increased by 2
    // after replacing <b> with *
    secondIndex += 2;
    msg =
      msg.substring(0, secondIndex) + '</b>' + msg.substring(secondIndex + 1);

    // changing pair count to 0 as we have replaced the * pair
    // and are looking for new pair
    pairCount = 0;

    // Increasing i value to 5 because we have added <b> and </b> (total length = 7)
    // on replacement of * pairs (total length = 2)
    // 7 - 2 = 5
    i += 5;
  }

  i += 1;

  if (i >= msg.length()) break;
}

// Set the text to the TextView using Html
// TextView tv = findViewById(R.id.your_textview_id);
// tv.setText(Html.fromHtml(msg))
