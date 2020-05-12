

// Retrieve Data with btn click or enter

button = document.querySelector('.btn')

button.addEventListener('click', calculator);

document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        calculator();
    }
});

function calculator() {

    // Bill Data
    var textSelected = document.getElementById('billAmount')
    resultBill = parseInt(textSelected.value)

    // Service Data & People Data

    function optionSelected(idSelector) {
        var argString, form, indexForm, selectedForm, resultService, resultPeople;
        // Translate arg
        argString = idSelector.id;

        // Select options within select tag
        form = document.getElementById(argString).options;

        // Identify the option selected
        indexForm = form.selectedIndex;

        // Return value from option selected
        selectedForm = form[indexForm].value

        return selectedForm;
    };

  resultService = parseInt(optionSelected(billService));
  resultPeople = parseInt(optionSelected(billPeople));

  // Make the Calculation

  function compute(bill, service, people) {

      // Test if value empty
      if(Number.isNaN(bill) || service === 0 || people === 0) {
          alert('Please enter a value!')
      } else {
          // Compute result
          var total = Math.round((bill * (service / 100)) / people);

          // Select Result Element
          var el = document.getElementById('totalBill')

          // Modify Element
          el.innerHTML = `$ ${total}<br><span>Each<span>`
      }
  }

  compute(resultBill, resultService, resultPeople);

};






