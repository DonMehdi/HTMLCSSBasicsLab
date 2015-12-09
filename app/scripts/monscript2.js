
// var myselect=document.getElementById("input-select")
//  myselect.add(new Option("New Last Option", "4"), null) //add new option to end of "sample"
//  myselect.add(new Option("New First Option", "0"), myselect.options[0]) //add new option to beginning of "sample"

 // var a=['x'];
 // var i=0;
 // function report(v) {
 //   //document.getElementById("textbox").innerHTML=a;
 // var j;
 // var s="";
 //       while(v)
 //             {
 //               for (j=0; j<a.length;j++)
 //                 {
 //                   if (a[j]=v)
 //                   { return; }
 //                 }
 //               a[i]=v;
 //                for (j=0; j<a.length;j++)
 //               {s+="<div>"+a[j]+"</div>";}
 //               document.getElementById("textbox").innerHTML=s;
 //               i++;
 //               v=null;
 //             }
 //   }
 function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb " src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);
