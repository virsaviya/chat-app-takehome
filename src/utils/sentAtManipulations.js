import moment from 'moment';

export const convertSentAt = (sentAt) => (
  moment(sentAt).calendar(null, {
    sameDay: '[today] [at] h:mma',
    nextDay: '[tomorrow] [at] h:mma',
    nextWeek: 'dddd [at] h:mma',
    lastDay: '[yesterday] [at] h:mma',
    lastWeek: '[last] dddd [at] h:mma',
    sameElse: 'dddd, MMMM D YYYY'
}));

export const sortBySentAt = (messages) =>
  messages.sort((a, b) => moment(a.sentAt).unix() - moment(b.sentAt).unix());
