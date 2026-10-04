import type { PageTour } from "@/components/dashboard/tour/types";

/**
 * Dentist "Walk through a visit" — a cross-page tour that moves through the
 * real screens a dentist uses during a patient visit: the dashboard waiting
 * room, the dental chart, and prescriptions. Each step navigates to the
 * actual page and spotlights the real widget.
 */
export const dentistVisitTour: PageTour = {
  title: "Patient visit",
  steps: [
    {
      path: "",
      target: '[data-tour="dentist-waiting-room"]',
      title: "Your waiting room",
      body: "Patients reception has checked in appear here. Tap Call & Start on a patient to begin their visit — it opens their chart straight away.",
    },
    {
      path: "",
      target: '[data-tour="dashboard-kpi-cards"]',
      title: "Your day at a glance",
      body: "These tiles show your patients booked today, how many you've completed, your current chair, and recalls coming due.",
    },
    {
      path: "dental-charts",
      target: '[data-tour="dental-charts-patient-select"]',
      title: "Open the patient's chart",
      body: "Starting a visit brings you here with the patient already selected. You can also switch patients from this picker.",
    },
    {
      path: "dental-charts",
      target: '[data-tour="dental-charts-chart"]',
      title: "Chart the teeth",
      body: "Tap any tooth to record what you find — caries, fillings, extractions and more. The chart updates exactly as you see it here.",
    },
    {
      path: "dental-charts",
      target: '[data-tour="dental-charts-add-procedure"]',
      title: "Record procedures",
      body: "Add the treatments you carry out. Everything you record here flows into the patient's bill automatically.",
    },
    {
      path: "prescriptions",
      target: '[data-tour="prescriptions-new"]',
      title: "Prescribe medication",
      body: "If the patient needs medication, create a prescription here. Known allergies are flagged before anything is issued.",
    },
    {
      path: "",
      target: '[data-tour="dentist-waiting-room"]',
      title: "Finish and free your chair",
      body: "When you finish the visit, the bill goes to reception as Ready for payment and your chair opens up for the next patient in the queue.",
    },
  ],
};
