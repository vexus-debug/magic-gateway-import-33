import type { PageTour } from "@/components/dashboard/tour/types";

/**
 * Dentist "Walk through a visit" — a cross-page tour that moves through the
 * real screens a dentist uses during a patient visit: the dashboard waiting
 * room, the dental chart, and prescriptions. Each step navigates to the
 * actual page, spotlights the real widget, and spells out exactly what to
 * click and do there.
 */
export const dentistVisitTour: PageTour = {
  title: "Patient visit",
  steps: [
    {
      path: "",
      target: '[data-tour="dentist-waiting-room"]',
      title: "1. Call your next patient",
      body: "This is your live queue. When you're ready for the next patient, click \"Call & Start\" beside their name — the visit opens with their chart loaded and your chair marked as busy.",
    },
    {
      path: "",
      target: '[data-tour="dashboard-kpi-cards"]',
      title: "2. Check your day",
      body: "Glance at these tiles before you start: how many patients are booked, how many you've finished, and which chair you're on. Nothing to click here — it's your snapshot of the day.",
    },
    {
      path: "dental-charts",
      target: '[data-tour="dental-charts-patient-select"]',
      title: "3. Confirm the patient",
      body: "The patient you called is already selected here (we've loaded a demo patient for this tour). If you ever need a different patient, open this dropdown and pick them — the whole page switches to their record.",
    },
    {
      path: "dental-charts",
      target: '[data-tour="dental-charts-chart"]',
      title: "4. Chart what you find",
      body: "Click any tooth on the chart. A small panel pops up: pick the condition (Decayed, Filled, Missing…), optionally tap the surfaces and material, then confirm. The tooth changes colour and the finding is saved to the patient's record.",
    },
    {
      path: "dental-charts",
      target: '[data-tour="dental-charts-add-procedure"]',
      title: "5. Record the work you do",
      body: "After selecting a tooth, click \"Add procedure\" here. Choose the treatment from the list, add notes if needed, and save. Every procedure you record flows straight into the patient's bill — no double entry.",
    },
    {
      path: "prescriptions",
      target: '[data-tour="prescriptions-new"]',
      title: "6. Prescribe if needed",
      body: "Click \"New prescription\", pick the patient, then add each medication with dose, frequency and duration. The system warns you if anything conflicts with the patient's known allergies before you save.",
    },
    {
      path: "",
      target: '[data-tour="dentist-waiting-room"]',
      title: "7. Finish the visit",
      body: "Back on your dashboard, click \"Finish visit\" on the patient. The bill goes to reception as \"Ready for payment\", your chair frees up, and the next patient in the queue moves up. That's a full visit — you're ready.",
    },
  ],
};
