class EasyKaptcha {
  form = null;
  button = null;
  zone = null;

  //
  constructor(){}

  init(config) {
    if (false === this.checkConfig(config))
      return;
    
    // Continue the init
  }

  checkConfig(config) {
    // We search for the form by ID in the document
    this.form = document.getElementById(
      config === null || config === void 0 ? void 0 : config.formId,
    );

    if (!this.form) {
      console.error("EasyKaptcha ERROR : Form not found.");
      return false;
    }

    // Then we search the confirm button, also by ID
    this.button = document.getElementById(
      config === null || config === void 0 ? void 0 : config.buttonId,
    );

    if (!this.button) {
      console.error("EasyKaptcha ERROR : Confirm button not found.");
      return false;
    }

    // Finally we search for the zone where captcha will be shown
    this.zone = document.getElementById(
      config === null || config === void 0 ? void 0 : config.zoneId,
    )

    if (!this.zone) {
      console.error("EasyKaptcha ERROR : Zone not found.");
      return false;
    }

    return true
  }
}