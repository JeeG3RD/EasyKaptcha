class EasyKaptcha {
  constructor(){}

  init(config) {
    // We search for the form by ID in the document
    const form = document.getElementById(
      config === null || config === void 0 ? void 0 : config.formId,
    );

    if (!form) {
      console.error("EasyKaptcha ERROR : Form not found.");
      return;
    }

    // Then we search the confirm button, also by ID
    const confirmButton = document.getElementById(
      config === null || config === void 0 ? void 0 : config.buttonId,
    );

    if (!confirmButton) {
      console.error("EasyKaptcha ERROR : Confirm button not found.");
      error;
    }

    
  }
}

export default EasyKaptcha;