# Takehome

1. ~~All messages are displayed in a list.~~
2. ~~Each message has its `content`, `senderUuid`, and `sentAt` properties displayed.~~
3. Messages are displayed at-most once. If there are duplicated messages, we would like them to be deduplicated if the `uuid` and `content` are the same.
4. ~~Instead of showing the `sentAt` timestamp, we would like to display a more human-readable string such as "DayOfTheWeek Month Day, Year at Time".~~
5. ~~Support sorting by `sentAt` in either ascending or descending order.~~
6. ~~Support pagination through messages where each page contains 5 messages. You are welcome to implement this how you see fit, e.g. infinite scrolling, a button, etc.~~
7.  Allow a message to be deleted. You are welcome to implement this how you see fit. (*Partially Completed*)

## Notes
- I built this with an eye for responsive design, so this UI should work the same on a small device.
- I chose not to worry about testing, linting, formatting for this project.  But normally, these would be considerations.
- Design decision: slack style, not a 2 person chat (b/c the mock data I generated lent itself best to this style)
- Design decision: there is no "me" in this chat
- Normally, I would implement systems for theming, colors/variables, constants, etc.  But I chose not to spend my efforts on this, since normally these systems would already be built out in a codebase.
- Since this is just front end, there is no fetching happening. The data is static mock data, therefore, the `load more` feature is simulated, and the `delete message` feature is incomplete (also ran out of time during that one).
- Was going to circle back to #2, as I'd have to play with the data a bit to get that working, but I ran out of time.

## Getting Started

- clone this repo
- run `yarn install`
- run `yarn start` and open to http://localhost:3000/
