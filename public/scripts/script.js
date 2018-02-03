
function createPPT() {
    var pptx = new PptxGenJS();
    console.log("here");

    //Presentation properties - Default
    pptx.setAuthor('Wikipedia to PowerPoint Generator');
    pptx.setTitle('Sample Presentation');

    pptx.setLayout('LAYOUT_WIDE');
    pptx.defineSlideMaster({
        title: "Your Title",
        bkgd: '36ABFF'
    });

    var slide = pptx.addNewSlide();

    //Get from custom form on index page
    // var font = "Gothic";
    // var titleSize = 36;
    // var bodySize = 18;
    // var fontColor = '363636';
    // var background = '000000';

    // var title = "Example Presentation";



    slide.addText("Example Presentation", { font_face: "Gothic", x:1.5, y:1.5, font_size:36, color:'363636'});
    slide.addText("A sample presentation generated by Wikipedia to PPT", {font_size: 18});

    pptx.save('Sample Presentation');
}