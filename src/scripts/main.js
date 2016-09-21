import $ from 'jquery';

$(function () {

  const perfMarkButton = $('.js-performance-mark');

  perfMarkButton.click(function( event ) {

    runPerformanceMark();

    // console.log('Start: Performance Mark()');

    // if(!window.performance || !window.performance.mark || !window.performance.measure) {
    //   alert("Unfortunately, your browser does not support performance.mark().");
    //   return;
    // }

    // performance.mark("loadTest-start");
    // loadTest();
    // performance.mark("loadTest-end");

    // performance.measure("loadTest", "loadTest-start", "loadTest-end");

    // performance.clearMarks("loadTest-start");
    // performance.clearMarks("loadTest-end");

    // const result = performance.getEntriesByName("loadTest");

    // console.log('Result', result);
    // console.log('Result: duration', result[0].duration);

    // console.log('End: Performance Mark()');

    // performance.clearMeasures("loadTest");
  });

});

function runPerformanceMark() {
  console.log('Start: Performance Mark()');

  if(!window.performance || !window.performance.mark || !window.performance.measure) {
    alert("Unfortunately, your browser does not support performance.mark().");
    return;
  }

  performance.mark("loadTest-start");
  loadTest();
  performance.mark("loadTest-end");

  performance.measure("loadTest", "loadTest-start", "loadTest-end");

  performance.clearMarks("loadTest-start");
  performance.clearMarks("loadTest-end");

  const result = performance.getEntriesByName("loadTest");

  console.log('Result', result);
  console.log('Result: duration', result[0].duration);

  console.log('End: Performance Mark()');

  performance.clearMeasures("loadTest");
}

function loadTest() {
  let booklist = [];
  
  for(let i = 0; i < 100; i++) {
    const book = {
      id: i,
      dimensions: {
        height: Math.round(Math.random() * 200),
        width: Math.round(Math.random() * 100),
        depth: Math.round(Math.random() * 10)
      },
      pubDate: new Date()
    };

    booklist.push(book);
  }

  return booklist;
}


  
  


  




