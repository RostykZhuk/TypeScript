enum Membership {
  Simple,
  Standart,
  Premium,
}

const membership = Membership.Standart;
const membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
  Instagram = 'Instagram',
  Facebook = 'Facebook',
  Telegram = 'Telegram',
}

const social = SocialMedia.Instagram;
console.log(social);
