# Modern Health Takehome

1. ~~All messages are displayed in a list.~~
2. ~~Each message has its `content`, `senderUuid`, and `sentAt` properties displayed.~~
3. Messages are displayed at-most once. If there are duplicated messages, we would like them to be deduplicated if the `uuid` and `content` are the same.
4. ~~Instead of showing the `sentAt` timestamp, we would like to display a more human-readable string such as "DayOfTheWeek Month Day, Year at Time".~~
5. ~~Support sorting by `sentAt` in either ascending or descending order.~~
6. ~~Support pagination through messages where each page contains 5 messages. You are welcome to implement this how you see fit, e.g. infinite scrolling, a button, etc.~~
7. Allow a message to be deleted. You are welcome to implement this how you see fit.


## Notes
- testing strategy
- linter/formatting
- design decision: slack style, not 2 people (b/c of data)
- design decision: not call out if I am the sender
- theming and colors/variables
- constants (ie 'ACS' and 'descending')
- performance on "load more" -> actually, would be fetching
- reusing the same style of component - I would clean that up
