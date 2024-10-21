/* ----------------- Events Table using DataTable.js --------------- */
const table = new DataTable("#myTable", {
  responsive: true,
  searchPanes: true,
  language: {
    info: "Displaying _TOTAL_ results",
  },
  columnDefs: [
    { responsivePriority: 1, targets: 0 },
    { responsivePriority: 2, targets: -1 },
  ],
  layout: {
    topEnd: "info",
    topStart: {
      search: {
        placeholder: "Search...",
      },
    },
    topEnd: "buttons",
    bottomEnd: "pageLength",
    bottomStart: "paging",
  },
  buttons: {
    name: "primary",
    buttons: ["copy", "csv", "excel"],
  },
});

/* ----------------- Event Table Data used for displaying the details of an Event in the Modal ------------------- */
const data = [
  {
    id: "firstEvent",
    eventName: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
  },
  {
    id: "secondEvent",
    eventName: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
  },
  {
    id: "thirdEvent",
    eventName: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
  },
  {
    id: "fourthEvent",
    eventName: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: "Jane Lee",
    status: "Completed",
  },
  {
    id: "fivethEvent",
    eventName: "Data Analytics in Business",
    date: "2024-11-12",
    speaker: "Rachel Moore",
    status: "Completed",
  },
  {
    id: "sixthEvent",
    eventName: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: "Prof. Alan Green",
    status: "Completed",
  },
  {
    id: "seventhEvent",
    eventName: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: "Kevin Adams",
    status: "In Progress",
  },
  {
    id: "eightEvent",
    eventName: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: "Emily Zhang",
    status: "Completed",
  },
  {
    id: "ninthEvent",
    eventName: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    status: "Completed",
  },
  {
    id: "tenthEvent",
    eventName: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: "Guest Panel",
    status: "In Progress",
  },
];


/* ------------------- Show Event Modal upon clicking the event name ------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const eventModalContainer = document.querySelector(".event_modal_container");
  const eventNames = document.querySelectorAll(".event_table .eventName");

  eventNames.forEach((eventName) => {
    data.forEach((event) => {
      if (eventName.getAttribute("data_event_id").includes(event.id)) {
        eventName.setAttribute("data-bs-target", "#" + event.id);

        const div = document.createElement("div");
        div.innerHTML = `<div class="modal fade modal-fullscreen-md-down" id="${event.id}" tabindex="-1" aria-labelledby="${event.id}Label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="${event.id}Label">
          ${event.eventName}
           <span>${event.date}</span>
          </h1>
          <i class="bi bi-x-circle" data-bs-dismiss="modal" aria-label="Close"></i>
        </div>
        <div class="modal-body">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quidem autem doloremque, quae iure magni, labore doloribus sapiente illum beatae aspernatur omnis nobis corrupti. Necessitatibus voluptate accusantium totam error vitae!</p>
        <p>Guest Speaker: <b>${event.speaker}</b></p>
        </div>
        <div class="modal-footer">
        <button>Edit</button>
        <div>
          <button>Delete</button>
          <button>Mark as completed</button>
        </div>
        </div>
      </div>
    </div>
  </div>`;

        eventModalContainer.appendChild(div);
      }
    });
  });
});
