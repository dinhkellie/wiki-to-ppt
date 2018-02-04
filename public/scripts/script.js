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

    //Get from custom form on index page
    // var font = "Gothic";
    // var titleSize = 36;
    // var bodySize = 18;
    // var fontColor = '363636';
    // var background = '000000';

    // var title = "Example Presentation";

    var color = pptcustom.cvalue;
    var font = pptcustom.tvalue;
    var title = "Example Presentation";
    var slide = pptx.addNewSlide();
    //Slide 1
    slide.addText(title,
    {
        font_face: font, x:1.5, y:2.0, fontSize:50, color:color, align: 'ctr'
    });
    slide.addText("A sample presentation generated by Wikipedia to PPT",
    {
        fontSize:30, align: 'ctr', x:1.5, y:5.0
    });

    //Slide 2
    var slide2 = pptx.addNewSlide();
    slide2.addText("Key Facts",
    {
        x:1.0, y:1.0, fontSize:40, align: 'ctr'
    });
    slide2.addText("Fact 1",
    {
        x:1.0, y:2.0, fontSize:30, align: 'left', bullet:true
    });
    slide2.addText("Fact 2",
    {
        x:1.0, y:3.0, fontSize:30, align: 'left', bullet:true
    });
    slide2.addText("Fact 3",
    {
        x:1.0, y:4.0, fontSize:30, align: 'left', bullet:true
    });

    //Slide 3
    var slide3 = pptx.addNewSlide();
    slide3.addText("Other Information",
    {
        x:1.0, y:1.0, fontSize:40, align: 'ctr'
    });
    slide3.addText("Fact 1",
    {
        x:1.0, y:2.0, fontSize:30, align: 'left', bullet:true
    });
    slide3.addText("Fact 2",
    {
        x:1.0, y:3.0, fontSize:30, align: 'left', bullet:true
    });
    slide3.addText("Fact 3",
    {
        x:1.0, y:4.0, fontSize:30, align: 'left', bullet:true
    });

    pptx.save('Sample Presentation');
}
