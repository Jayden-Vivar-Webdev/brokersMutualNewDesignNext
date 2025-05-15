 // Form Navigation
 const steps = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7'];
 const totalSteps = steps.length;
 
 function nextStep(currentStepId, nextStepId) {
     document.getElementById(currentStepId).classList.add('hidden');
     document.getElementById(nextStepId).classList.remove('hidden');
     
     // Update progress bar
     const currentStepIndex = steps.indexOf(nextStepId);
     const progressPercentage = (currentStepIndex / (totalSteps - 1)) * 100;
     document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
     
     // Scroll to top of form
     document.getElementById(nextStepId).scrollIntoView({ behavior: 'smooth', block: 'start' });
 }
 
 function backStep(currentStepId, prevStepId) {
     document.getElementById(currentStepId).classList.add('hidden');
     document.getElementById(prevStepId).classList.remove('hidden');
     
     // Update progress bar
     const currentStepIndex = steps.indexOf(prevStepId);
     const progressPercentage = (currentStepIndex / (totalSteps - 1)) * 100;
     document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
     
     // Scroll to top of form
     document.getElementById(prevStepId).scrollIntoView({ behavior: 'smooth', block: 'start' });
 }
 
 // Form Submission
 const form = document.querySelector('form');
 if (form) {
     form.addEventListener('submit', function(e) {
         e.preventDefault();
         nextStep('step6', 'step7');
     });
 }