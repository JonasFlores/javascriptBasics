function loadProfiles() {
    let data = [{
        title: "Vinod Selvin",
        desc: "Loves coding"
      },
      {
        title: "Vinod Selvin",
        desc: "Loves coding"
      },
      {
        title: "John Doe",
        desc: "John Doe is a senior Web Developer"
      }/*,
      {
        title: "Jane Doe",
        desc: "Jane Doe is a experienced Designer"
      },
      {
        title: "Jake",
        desc: "Software Developer"
      }*/
    ]
    
    let html = "";
    
    data.forEach(function(value, key) {
      console.log(key)
      console.log(value)
      html += loadTemplate("user-profile-template", data[key]);
    });
    //Now you have the dynamic html, use wherever you want

    console.log("html: " + html)
    let x = 'frase em js'
    html += `
    <h5> teste injection html and js</h5>
    <p><b> ${x} <b><p>
    `
    
    document.getElementById("content").innerHTML = html;
  }
  
  function loadTemplate(template_id, data) {
    let template = document.getElementById(template_id).innerHTML;
    let result = eval('`' + template + '`');
    console.log("Result: "+ result);
    return result;
  }