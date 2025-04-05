function displaySelected() {
    // Fetch selected radio button value
    const selectedRadio = document.querySelector('input[name="color"]:checked');
    const radioValue = selectedRadio?.value || "No color selected";

    // Fetch selected checkbox values
    const checkboxValues = Array.from(document.querySelectorAll('.feature:checked'))
                                .map(cb => cb.value);
    const featuresText = checkboxValues.length ? checkboxValues.join(', ') : "No features selected";

    // Update result paragraph
    document.getElementById('result').innerHTML = `Color: ${radioValue}<br>Features: ${featuresText}`;

    // Update title and styles
    document.getElementById('title').textContent = "Preferences Submitted!";
    document.querySelector('label').style.fontWeight = 'bold';
    document.querySelectorAll('label').forEach(label => label.style.color = 'purple');

    // Log results to console
    console.log("Selected Radio:", radioValue);
    console.log("Selected Features:", checkboxValues);
}
