# NFL crime

## Step Change log and notes
- Step 1, setup basic angular repo used Angular CLI.
- Step 2, Setup basic service using Angular CLI and HttpClient, caching and redundant requests are ignorer for now.
- Step 3, Added material design, basic views/routing and components with to display data, intentionally kept page and component logic seperated to keep refactoring easier later.
- Step 4, Added a simple indexof filter on the subject name for each view using a Pipe, simple fast and works, would need some reconsideration of the data set was bigger.
- Step 5, Added timeline, added simple timelines that can bee seen for each crime, future improvements could include timescale and some data smoothing for better vizualisation
- Step 6, ran out of time, the plan was to use a shared service, managed to get it set up in the top crimes service, did not have time for the other services or the GUI however, would have needed ~15 minutes more for this. :)

## Post mortem notes
Almost made it, if i had used Angular more regularly the past year i problably would have gotten the last part. :)

If i had more time i would problably had gone with something like @ngrx/store for statemanagement for performance reasons.
For this test it seemed more appropriate to wing it, since i has less time to plan how data should flow.

Going with a gamejam'ish prototype approach i also skipped tests and error handling.

The top' pages could problably also be merged into a single component, but in this case it was faster to copy paste than to do that planning.

All over a fun challenge, cheers!
