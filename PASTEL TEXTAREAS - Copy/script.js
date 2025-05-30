document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("puzzle-container");

  // Predefined list of distinct pastel colors.
  const pastelColors = [
    "#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF",
    "#EFD9CE", "#D6EAD2", "#D3E0EA", "#F2D2BD", "#FFCBCB",
    "#C4E7CB", "#B9E4C9", "#FAF3DD", "#E3E8CD", "#A8DADC",
    "#BEE3F8", "#C1FFD7", "#FFF1C1", "#E7D3FF", "#D7BDE2"
  ];

  // Textareas configuration.
  // The first 10 have specific content.
  const textareasData = [
    {
      content: `SWO Template

Good day,

The patient is due for their 60-month Oxygen Recertification. Kindly complete the CMN, please ensure that the dates and signature should be in the same format.

Please have DOCTOR sign and fax it back to (484) 362-1480 at your earliest convenience.

Feel free to call us at (484) 567-0666 if you have any questions.
Thank you for your prompt attention!

From: Tariao, Raymond  
Phone: (484) 567-0666  
Fax: (484) 362-1480

Phone: 4845670666  
Fax: 4843621480`,
      width: 320,
      height: 220,
      left: "5%",
      top: "10%"
    },
    {
      content: `CMN Template

IMPORTANT!

The answer keys are located on the back of the sheet. We kindly request that the doctor accurately and completely fill out the form for insurance billing purposes on behalf of the patient, please ensure that the dates and signature should be in the same format.

Please have DOCTOR sign and fax it back to (484) 362-1480 at your earliest convenience.

Feel free to call us at (484) 567-0666 if you have any questions.
Thank you for your prompt attention!`,
      width: 360,
      height: 240,
      left: "70%",
      top: "10%"
    },
    {
      content: `Medicare

What's needed: Scheduling/ 60 Month Restart
| RUL: 
| SWO Expiration: 
| Signed date: 
| Item/s: E1390 & 
| Insurance: 
| Comment/s:
We got valid testing and received signed SWO by CODE. 
Instructed not to log Medicare.
Created New Sales Order - CODE.
New Pickup/Exchange - CODE.
SB flipped to Restart Scheduled.

--------------------------

5-YR RUL is not due until the DATE. Please do not schedule it until then.

2LPM Oxygen Via NC At rest
2LPM Oxygen Via NC with exertion
2LPM via NC Continuous
2LPM via NC Hours of Sleep & PRN 
2LPM Bled into PAP / 60Month Restart
-----------------------------------------------
Please have patient sign 60-month letter when completing exchange/restart located in OTL.
-----------------------------------------------
CLAIM NOTE

RUL MET E1390 INITIAL 05032019
RUL MET E1392 INITIAL 362020
RUL MET E0431 INITIAL 362020
RUL MET K0738 INITIAL 362020
-----------------------------------------------
CSR, Scheduling
-----------------------------------------------
BL-E1390-5LPM
BL-K0738
BL-E1392
OXY PORTABILITY
BL-E0443

2LPM Oxygen Via NC At rest
2LPM Oxygen Via NC with exertion
2LPM via NC Continuous
2LPM via NC Hours of Sleep & PRN 
2LPM Bled into PAP`,
      width: 280,
      height: 190,
      left: "20%",
      top: "50%"
    },
    {
      content: `Non-medicare

What's needed: Scheduling/ 60 Month Restart
| RUL: 
| CMN Expiration: 
| Signed date: 
| Item/s: E1390 &
| Insurance:  
| Comment/s:
We got valid testing and received signed CMN by CODE. 
Logged CMN.
Created New Sales Order - CODE.
New Pickup/Exchange - CODE.
SB flipped to Restart Scheduled.

5-YR RUL is not due until the DATE. Please do not schedule it until then.

2LPM Oxygen Via NC At rest
2LPM Oxygen Via NC with exertion
2LPM via NC Continuous
2LPM via NC Hours of Sleep & PRN 
2LPM Bled into PAP / 60Month Restart
-----------------------------------------------
Please have patient sign 60-month letter when completing exchange/restart located in OTL.
-----------------------------------------------
CLAIM NOTE

RUL MET E1390 INITIAL 05032019
RUL MET E1392 INITIAL 362020
RUL MET E0431 INITIAL 362020
RUL MET K0738 INITIAL 362020
-----------------------------------------------
CSR, Scheduling
-----------------------------------------------
BL-E1390-5LPM
BL-K0738
BL-E1392
OXY PORTABILITY
BL-E0443

2LPM Oxygen Via NC At rest
2LPM Oxygen Via NC with exertion
2LPM via NC Continuous
2LPM via NC Hours of Sleep & PRN 
2LPM Bled into PAP`,
      width: 240,
      height: 170,
      left: "80%",
      top: "40%"
    },
    {
      content: `Replacement needed

60Month Restart
Call ahead of time and provide the ETA.
Do not remove any oxygen equipment included on the delivery ticket to ensure proper billing.

Switch out the equipment and have the patient sign the delivery ticket (#CODE), the pickup/exchange form (#CODE), and the 60-month letter located in OTL.
2 liter flow

Set up Autopay if required.
For any questions, call 484-567-0666.

-------------

[Scheduling] Insurance checked, I explained to the patient the O2 5 YEAR RENEWAL process and the patient understood, will continue with our services and requested for a replacement for the oxygen equipment.`,
      width: 320,
      height: 220,
      left: "12%",
      top: "70%"
    },
    {
      content: `Sign only

60Month Restart
Call ahead of time and provide the ETA.
Do not remove any oxygen equipment included on the delivery ticket to ensure proper billing.

RUL Signature only to bill insurance and no need to swap (O₂). Have the patient sign the delivery ticket (#CODE), the pickup/exchange form (#CODE), and the 60-month letter located in OTL.
2 liter flow

Set up Autopay if required.
For any questions, call 484-567-0666.

-------------

[Scheduling] Insurance checked, I explained to the patient the O2 5 YEAR RENEWAL process and the patient understood, will continue with our services but declined getting a replacement.

Patient's permanent address is CODE,
the best phone number to contact is CODE
and patient is available on DATE to sign the contract.`,
      width: 360,
      height: 240,
      left: "60%",
      top: "75%"
    },
    {
      content: `Check and only replace if necessary 

60Month Restart
Call ahead of time and provide the ETA.
Do not remove any oxygen equipment included on the delivery ticket to ensure proper billing.

Check the O₂ equipment and only switch out if necessary. Have the patient sign the delivery ticket (#CODE), the pickup/exchange form (#CODE), and the 60-month letter located in OTL.
2 liter flow

Set up Autopay if required.
For any questions, call 484-567-0666.

-------------

[Scheduling] Insurance checked, I explained to the patient the O2 5 YEAR RENEWAL process and the patient understood, will continue with our services but requested that we check the oxygen equipment and only replace if necessary.

Patient's permanent address is CODE,
the best phone number to contact is CODE
and patient is available on DATE for checking the oxygen equipment.`,
      width: 280,
      height: 190,
      left: "30%",
      top: "85%"
    },
    {
      content: `Account is on hold 

Hello, James!

I hope this email finds you well. I am writing to inquire if you could assist a patient residing at [ADDRESS].

The patient is due for an O2 5 YEAR RENEWAL, and the account is currently on hold. Should we proceed with creating a new work order for the O2 5 YEAR RENEWAL, or send the account for branch review to address the hold?

If additional details are needed, please let us know. Your prompt attention to this matter is greatly appreciated.

Thank you and have a great day!

-------------

[Scheduling] The account is on hold, sent an email to CODE, will update once got a response from them.`,
      width: 240,
      height: 170,
      left: "75%",
      top: "60%"
    },
    {
      content: `Template

What’s needed: 

| Item/s: E1390 &
| RUL Date: 

| Doctor call: 0/5
| GoScripts: 0/2
| Parachute: 0/2
| Patient Call: 0/3
| Faxes sent: 0/5

| Insurance: 
| Policy Number: 
| Checked Eligibility: Yes No
| DNC/DNF: Yes No
| GoScripts: Yes 
| Parachute: Yes 

| Doctor: 
(PECOS)
| NPI: 
| Phone Number: 
| Fax Number: 

| Patient Evaluation/Test Date: 
Patient Room air at rest: CODE%
Patient Room air during exertion: CODE%
Patient SpO2 while wearing 02 at 2LPM with exertion: CODE%
| Diagnoses: 
| Usage: 2LPM Oxygen via NC Continuous/Nocturnal
| Can SWO be used: Yes No

| Remark/s: We have valid testing, updated the clinical tab, and moved the testing to the OXRUL lists, but we cannot send the request for SWO/CMN until [DATE]. Flipped SB to Election pending Q.`,
      width: 300,
      height: 210,
      left: "40%",
      top: "80%"
    },
    {
      content: `First touch

This patient is currently being reviewed by the Centralized RUL team.  If the patient calls in with any questions please transfer them to (484) 567-0666 or Purecloud call queue MedicareRestarts_adapthealth.  You can also email this team, 60monthrestarts@adapthealth.com for a status update.  

Patient has had Oxygen equipment for 60 months. If patient elects to not restart all oxygen equipment will need to be picked up and the patient will have to switch providers.  
****************************************** RUL **************************************************
Assessment Team Review: Q

Does the insurance cap?

Testing type: 6MWT
Patient Evaluation/Test Date:
Patient SpO2 on room air at rest: CODE%
Patient SpO2 on room air during exertion: CODE%
Patient SpO2 while wearing 02 at 2LPM with exertion CODE%

Testing Date: DATE, 6MWT CODE on 2LPM. Page 1
---------------------------------

Sam/Sim Results- 

E1390: 

Portability:`,
      width: 320,
      height: 220,
      left: "40%",
      top: "80%"
    },
    {
      content: "Sent to dispatch\n\n[Scheduling] Updated both work order and pick-up/exchange ticket and sent it to dispatch DATE.",
      width: 240,
      height: 150,
      left: "10%",
      top: "90%"
    },
    {
      content: `POC Availability

Hello, Catherine!

I hope this email finds you well. I am writing to inquire if you could assist a patient residing at [ADDRESS].

This patient is due for an O2 5 YEAR RENEWAL, and we received a prescription for a POC for the patient and I have attached the prescription.

If additional details are needed, please let us know. Your prompt attention to this matter is greatly appreciated.

Thank you and have a great day!`,
      width: 250,
      height: 160,
      left: "25%",
      top: "5%"
    },
    {
      content: `POC 6LPM

Hello, Catherine!

I hope this email finds you well. I am writing to inquire if you could assist a patient residing at [ADDRESS].

We received a prescription for a POC for the patient, indicating a requirement of up to 6 LPM. We would like to confirm if we have a POC that can handle up to 6 LPM?

If additional details are needed, please let us know. Your prompt attention to this matter is greatly appreciated.

Thank you and have a great day!`,
      width: 260,
      height: 180,
      left: "40%",
      top: "90%"
    },
    {
      content: `OTL Pushback to CS

[Scheduling] Checked account and SO#CODE has error message/s:

[PUT_THE_ERROR_MESSAGE_HERE]

Updated it, to avoid getting this account as pushback.`,
      width: 270,
      height: 170,
      left: "65%",
      top: "5%"
    },
    {
      content: `Rekey

5/2/2025 - Rekey to show the rental equipment the patient has.

REKEYED SO#CODE: Rekey to show the rental equipment the patient has.

PT NAME: CODE
PT ID: CODE
SALES ORDER: CODE
BT DATABASE: STLukes/OHH/Aerocare

BL-E1390-5LPM
BL-K0738
BL-E1392
OXY PORTABILITY
BL-E0443

2LPM Oxygen Via NC At rest
2LPM Oxygen Via NC with exertion
2LPM via NC Continuous
2LPM via NC Hours of Sleep & PRN
2LPM Bled into PAP`,
      width: 280,
      height: 190,
      left: "5%",
      top: "30%"
    },
    {
      content: `[VOICEMAIL]

Hi! This is Raymond from AdaptHealth and its family of companies on a recorded line.

This is about the 5-year renewal of your durable medical equipment, and we received the documents that we need from your doctor. Give us a call back using 484-567-0666.

---------------------------------------

Hi, this is Raymond from AdaptHealth and its family of companies on a recorded line.

This is regarding the 5-year renewal of your durable medical equipment, and we received the documents that we need from your doctor.

For HIPAA compliance, could you please confirm your DATE OF BIRTH or ADDRESS before we proceed?

Your account will reach 5 years on [DATE].
As part of the renewal process, you'll need to sign a new agreement to ensure insurance continues covering costs, including maintenance, repairs, replacement, and supplies that you are getting from the local office.

1. Do you plan to continue with our services?

2. Are you having any issues with your oxygen equipment?

- If yes: Please provide the delivery date, your address, and your phone number.

- If no: How would you like to sign the contract—email, postal mail, or in person?

Thank you for your time. If you have any questions or need assistance, please call us at 484-567-0666.`,
      width: 220,
      height: 140,
      left: "80%",
      top: "30%"
    },
    {
      content: `Blind delivery

60Month Restart
Call ahead of time and provide the ETA.
Do not remove any oxygen equipment included on the delivery ticket to ensure proper billing.

Proceed to drive by to the address if the patient does not answer the phone. Switch out the equipment and have the patient sign the delivery ticket (#CODE), the pickup/exchange form (#CODE), and the 60-month letter located in OTL.
2 liter flow

Set up Autopay if required.
For any questions, call 484-567-0666.

----- 

[Scheduling] We have made several attempts to contact the patient without success. Set them up for blind delivery DATE.

[Scheduling] The phone number that we got for the patient is disconnected/no longer in service. Set them up for blind delivery DATE.`,
      width: 210,
      height: 160,
      left: "50%",
      top: "85%"
    },
    {
      content: "",
      width: 230,
      height: 150,
      left: "15%",
      top: "40%"
    },
    {
      content: "",
      width: 240,
      height: 160,
      left: "80%",
      top: "60%"
    },
    {
      content: "",
      width: 250,
      height: 180,
      left: "35%",
      top: "85%"
    }
  ];

  // Uniform size for active textareas.
  const activeWidth = 450;
  const activeHeight = 600;

  // Function to reset a textarea back to its original position.
  function resetTextarea(textarea) {
    textarea.classList.remove("active");
    textarea.style.position = "absolute";
    textarea.style.left = textarea.dataset.originalLeft;
    textarea.style.top = textarea.dataset.originalTop;
    textarea.style.width = textarea.dataset.originalWidth;
    textarea.style.height = textarea.dataset.originalHeight;
    textarea.style.zIndex = "";
    textarea.style.transform = "";
  }

  // Create each textarea element dynamically.
  textareasData.forEach((data, index) => {
    const textarea = document.createElement("textarea");

    // Set content or placeholder.
    if (data.content.trim() !== "") {
      textarea.value = data.content;
    } else {
      textarea.placeholder = `Textarea ${index + 1}`;
    }

    // Set initial size and position.
    textarea.style.width = data.width + "px";
    textarea.style.height = data.height + "px";
    textarea.style.left = data.left;
    textarea.style.top = data.top;

    // Assign a distinct pastel background color.
    textarea.style.backgroundColor = pastelColors[index % pastelColors.length];

    // Save original settings for potential reset.
    textarea.dataset.originalLeft = data.left;
    textarea.dataset.originalTop = data.top;
    textarea.dataset.originalWidth = data.width + "px";
    textarea.dataset.originalHeight = data.height + "px";

    // When clicked, activate the textarea (unless it’s being dragged).
    textarea.addEventListener("click", function (e) {
      e.stopPropagation();
      if (!this.classList.contains("active")) {
        this.classList.add("active");
        this.style.position = "fixed"; // Switch to fixed for pop-up positioning.
        recalcActivePositions();
      }
    });

    container.appendChild(textarea);

    // Make each textarea draggable.
    makeDraggable(textarea);
  });

  // Clicking anywhere outside active textareas resets them.
  document.addEventListener("click", function () {
    document.querySelectorAll("textarea.active").forEach((el) => {
      resetTextarea(el);
    });
  });

  // Recalculate positions for all active textareas so they’re centered side by side.
  function recalcActivePositions() {
    const activeEls = Array.from(document.querySelectorAll("textarea.active"));
    if (activeEls.length === 0) return;

    // Apply uniform active size.
    activeEls.forEach((el) => {
      el.style.width = activeWidth + "px";
      el.style.height = activeHeight + "px";
    });

    // Calculate horizontal margin and overall positioning.
    const margin = 30;
    const totalWidth = activeEls.length * activeWidth + margin * (activeEls.length - 1);
    const startLeft = (window.innerWidth - totalWidth) / 2;
    const topPos = (window.innerHeight - activeHeight) / 2;

    let currentLeft = startLeft;
    activeEls.forEach((el) => {
      el.style.left = currentLeft + "px";
      el.style.top = topPos + "px";
      el.style.zIndex = 2000; // Bring to the front.
      currentLeft += activeWidth + margin;
    });
  }

  window.addEventListener("resize", recalcActivePositions);

  // --- Draggable functionality ---
  function makeDraggable(el) {
    let startX, startY;
    let initialX, initialY;
    let dragged = false;
  
    el.addEventListener("mousedown", dragStart);
  
    function dragStart(e) {
      e.stopPropagation(); // Prevent conflict with container's click handler.
      startX = e.clientX;
      startY = e.clientY;
      // Use computed style to get current left/top values.
      initialX = parseInt(window.getComputedStyle(el).left, 10);
      initialY = parseInt(window.getComputedStyle(el).top, 10);
      dragged = false;
      document.addEventListener("mousemove", dragMove);
      document.addEventListener("mouseup", dragEnd);
    }
  
    function dragMove(e) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (!dragged && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
        dragged = true;
      }
      if (dragged) {
        el.style.left = (initialX + dx) + "px";
        el.style.top = (initialY + dy) + "px";
      }
    }
  
    function dragEnd(e) {
      document.removeEventListener("mousemove", dragMove);
      document.removeEventListener("mouseup", dragEnd);
      // If a drag has occurred, prevent a click in order not to trigger activation.
      if (dragged) {
        el.addEventListener("click", preventClick, true);
      }
    }
  
    function preventClick(e) {
      e.stopPropagation();
      e.preventDefault();
      el.removeEventListener("click", preventClick, true);
    }
  }
});
