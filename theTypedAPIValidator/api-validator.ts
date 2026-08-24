interface UserProfile {
  id: number;
  username: string;
  settings?: {
    notifications: boolean;
  };
}

function isNotified(user: UserProfile): boolean {
  return user.settings?.notifications ?? false;
}

const userWithNotifications: UserProfile = {
  id: 1,
  username: "alice",
  settings: { notifications: true },
};

const userWithoutNotifications: UserProfile = {
  id: 2,
  username: "bob",
  settings: { notifications: false },
};

const userWithoutSettings: UserProfile = {
  id: 3,
  username: "charlie",
};

const users: UserProfile[] = [
  userWithNotifications,
  userWithoutNotifications,
  userWithoutSettings,
];

users.forEach((user) => {
  console.log(`${user.username}: ${isNotified(user)}`);
});
