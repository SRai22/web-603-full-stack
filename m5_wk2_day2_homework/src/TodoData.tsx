// src/TodoData.tsx

export type Todo = {
  id: number;
  text: string;
  note: string;
  done: boolean;
};

export const TodoData = {
  // Sunday
  TodoList1: [
    {
      id: 1,
      text: "Eat Breakfast",
      note: "Make Eggs and Pancakes",
      done: false,
    },
    { id: 2, text: "Walk Dog", note: "Bring doggie bag", done: false },
    {
      id: 3,
      text: "Take Shower",
      note: "Shower no later than 10am!",
      done: false,
    },
  ],

  // Tuesday
  TodoList2: [
    { id: 1, text: "Get Lunch", note: "Lunch at Sandbox", done: false },
    {
      id: 2,
      text: "Run a Mile",
      note: "Stop by mom at end of run",
      done: false,
    },
    {
      id: 3,
      text: "Take Bath",
      note: "Prep half hour before. Replenish bath oil.",
      done: false,
    },
  ],

  // Monday
  TodoList3: [
    {
      id: 1,
      text: "Plan the week",
      note: "Outline tasks and priorities for the week",
      done: false,
    },
    {
      id: 2,
      text: "Clean workspace",
      note: "Organize desk and clear clutter",
      done: false,
    },
    {
      id: 3,
      text: "Grocery",
      note: "Buy essentials for the next few days",
      done: false,
    },
  ],

  // Wednesday
  TodoList4: [
    {
      id: 1,
      text: "Workout",
      note: "30–45 minute strength or cardio session",
      done: false,
    },
    {
      id: 2,
      text: "Laundry",
      note: "Wash, dry, and fold clothes",
      done: false,
    },
    { id: 3, text: "Call family", note: "Catch up and check in", done: false },
  ],

  // Thursday
  TodoList5: [
    {
      id: 1,
      text: "Review goals",
      note: "Reflect on weekly progress and blockers",
      done: false,
    },
    {
      id: 2,
      text: "Meal prep",
      note: "Prepare meals for the next few days",
      done: false,
    },
    {
      id: 3,
      text: "Read 20 minutes",
      note: "Read a book or article for personal growth",
      done: false,
    },
  ],

  // Friday
  TodoList6: [
    {
      id: 1,
      text: "Wrap up work",
      note: "Close pending tasks and send updates",
      done: false,
    },
    {
      id: 2,
      text: "Tidy apartment",
      note: "Light cleaning before the weekend",
      done: false,
    },
    {
      id: 3,
      text: "Plan weekend",
      note: "Decide activities or outings",
      done: false,
    },
  ],

  // Saturday
  TodoList7: [
    {
      id: 1,
      text: "Outdoor activity",
      note: "Go for a hike, walk, or outdoor sport",
      done: false,
    },
    {
      id: 2,
      text: "Errands",
      note: "Finish shopping and miscellaneous tasks",
      done: false,
    },
    {
      id: 3,
      text: "Relax / hobby time",
      note: "Unwind or work on a personal hobby",
      done: false,
    },
  ],
};
