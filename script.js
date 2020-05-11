

// Retrieve Data with btn click

button = document.querySelector('.btn')

button.addEventListener('click', function(){

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

      var total = Math.floor((bill * (service / 100)) / people);
      return total
  }

  var finalBill = compute(resultBill, resultService, resultPeople)

  // Display Data

      // Select Element
      var el = document.getElementById('totalBill')

      // Modify Element
      el.innerHTML = `$ ${finalBill}<br><span>Each<span>`



});



