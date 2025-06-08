
const events = [
  { title: "Yoga Session", time: "08:00", section: "morning" },
  { title: "Tech Talk", time: "10:30", section: "morning" },
  { title: "Lunch Break", time: "13:00", section: "evening" },
  { title: "Panel Discussion", time: "17:00", section: "evening" },
  { title: "Networking", time: "19:00", section: "evening" },
];

const renderEvents = () => {
  const morningContainer = document.getElementById('morning-events');
  const eveningContainer = document.getElementById('evening-events');
  const sortedEvents = events.sort((a, b) => a.time.localeCompare(b.time));

  sortedEvents.forEach(event => {
    const eventDiv = document.createElement('div');
    eventDiv.className = 'p-4 bg-white rounded shadow hover:shadow-lg transition-shadow';
    eventDiv.innerHTML = `<strong class="text-lg">${event.title}</strong><br><span class="text-sm text-gray-600">${event.time}</span>`;

    if (event.section === 'morning') {
      morningContainer.appendChild(eventDiv);
    } else {
      eveningContainer.appendChild(eventDiv);
    }
  });
};

renderEvents();
