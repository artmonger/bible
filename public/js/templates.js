Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Matthew");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Mark");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Luke");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("John");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Acts");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("Romans");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("1 Corinthians");
  }

function program15(depth0,data) {
  
  
  data.buffer.push("2 Corinthians");
  }

function program17(depth0,data) {
  
  
  data.buffer.push("Galatians");
  }

function program19(depth0,data) {
  
  
  data.buffer.push("Ephesians");
  }

function program21(depth0,data) {
  
  
  data.buffer.push("Philippians");
  }

function program23(depth0,data) {
  
  
  data.buffer.push("Colossians");
  }

function program25(depth0,data) {
  
  
  data.buffer.push("1 Thessalonians");
  }

function program27(depth0,data) {
  
  
  data.buffer.push("2 Thessalonians");
  }

function program29(depth0,data) {
  
  
  data.buffer.push("1 Timothy");
  }

function program31(depth0,data) {
  
  
  data.buffer.push("2 Timothy");
  }

function program33(depth0,data) {
  
  
  data.buffer.push("Titus");
  }

function program35(depth0,data) {
  
  
  data.buffer.push("Philemon");
  }

function program37(depth0,data) {
  
  
  data.buffer.push("Hebrews");
  }

function program39(depth0,data) {
  
  
  data.buffer.push("James");
  }

function program41(depth0,data) {
  
  
  data.buffer.push("1 Peter");
  }

function program43(depth0,data) {
  
  
  data.buffer.push("2 Peter");
  }

function program45(depth0,data) {
  
  
  data.buffer.push("1 John");
  }

function program47(depth0,data) {
  
  
  data.buffer.push("2 John");
  }

function program49(depth0,data) {
  
  
  data.buffer.push("3 John");
  }

function program51(depth0,data) {
  
  
  data.buffer.push("Jude");
  }

function program53(depth0,data) {
  
  
  data.buffer.push("Revelation");
  }

  data.buffer.push("<layout class=\"flex flex-row\">\n  <nav id=\"books-menu\" class=\"flex flex-column\">\n    <div style=\"text-align: center;\">\n      ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0,'autofocus': depth0};
  hashTypes = {'type': "STRING",'value': "ID",'placeholder': "STRING",'autofocus': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SearchFieldView", {hash:{
    'type': ("search"),
    'value': ("searchQuery"),
    'placeholder': ("John 3:16"),
    'autofocus': ("autofocus")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n    <books class=\"flex-1\">\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "Matthew", options) : helperMissing.call(depth0, "link-to", "book", "Matthew", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "Mark", options) : helperMissing.call(depth0, "link-to", "book", "Mark", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "Luke", options) : helperMissing.call(depth0, "link-to", "book", "Luke", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "John", options) : helperMissing.call(depth0, "link-to", "book", "John", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "Acts", options) : helperMissing.call(depth0, "link-to", "book", "Acts", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "Romans", options) : helperMissing.call(depth0, "link-to", "book", "Romans", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "1Corinthians", options) : helperMissing.call(depth0, "link-to", "book", "1Corinthians", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "2Corinthians", options) : helperMissing.call(depth0, "link-to", "book", "2Corinthians", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "Galatians", options) : helperMissing.call(depth0, "link-to", "book", "Galatians", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "Ephesians", options) : helperMissing.call(depth0, "link-to", "book", "Ephesians", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "Philippians", options) : helperMissing.call(depth0, "link-to", "book", "Philippians", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "Colossians", options) : helperMissing.call(depth0, "link-to", "book", "Colossians", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "1Thessalonians", options) : helperMissing.call(depth0, "link-to", "book", "1Thessalonians", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "2Thessalonians", options) : helperMissing.call(depth0, "link-to", "book", "2Thessalonians", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "1Timothy", options) : helperMissing.call(depth0, "link-to", "book", "1Timothy", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(31, program31, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "2Timothy", options) : helperMissing.call(depth0, "link-to", "book", "2Timothy", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(33, program33, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "Titus", options) : helperMissing.call(depth0, "link-to", "book", "Titus", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(35, program35, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "Philemon", options) : helperMissing.call(depth0, "link-to", "book", "Philemon", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(37, program37, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "Hebrews", options) : helperMissing.call(depth0, "link-to", "book", "Hebrews", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(39, program39, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "James", options) : helperMissing.call(depth0, "link-to", "book", "James", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(41, program41, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "1Peter", options) : helperMissing.call(depth0, "link-to", "book", "1Peter", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(43, program43, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "2Peter", options) : helperMissing.call(depth0, "link-to", "book", "2Peter", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(45, program45, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "1John", options) : helperMissing.call(depth0, "link-to", "book", "1John", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(47, program47, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "2John", options) : helperMissing.call(depth0, "link-to", "book", "2John", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(49, program49, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "3John", options) : helperMissing.call(depth0, "link-to", "book", "3John", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(51, program51, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "Jude", options) : helperMissing.call(depth0, "link-to", "book", "Jude", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(53, program53, data),contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "book", "Revelation", options) : helperMissing.call(depth0, "link-to", "book", "Revelation", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </books>\n  </nav>\n\n  <article class=\"flex-1\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </article>\n</layout>");
  return buffer;
  
});

Ember.TEMPLATES["chapter"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"chapter\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["chapter/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    <p>\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unbound.call(depth0, "each", "verse", "in", "paragraph", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </p>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unbound.call(depth0, "each", "word", "in", "verse", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n          <a href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "word.raw", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "word.raw", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n    <div style=\"text-align: center;\">\n      Loading\n    </div>\n  ");
  }

  data.buffer.push("<div class=\"paragraphs\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unbound.call(depth0, "each", "paragraph", "in", "paragraphs", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0,depth0],types:["ID","ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "paragraphs.length", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["chapter/loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"paragraphs\">\n  <div style=\"text-align: center;opacity: 0.5;position: absolute;top: 45%;left: 55%\" class=\"spinner\">\n    <svg width=\"32\" height=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g>\n        <title>Layer 1</title>\n        <g><rect height=\"8\" width=\"1.5\" fill=\"#231F20\" x=\"14.75\"/></g>\n        <g><rect height=\"1.5\" width=\"8\" fill=\"#414042\" transform=\"matrix(0.5,0.866,-0.866,0.5,9.8564,-5.8564) \" y=\"4.358\" x=\"6\"/></g>\n        <g><rect height=\"1.5\" width=\"8\" fill=\"#58595B\" transform=\"matrix(0.866,0.5,-0.5,0.866,5.7517,-1.4644) \" y=\"8.75\" x=\"1.609\"/></g>\n        <g><rect height=\"1.5\" width=\"8\" fill=\"#6D6E71\" y=\"14.75\"/></g>\n        <g><rect height=\"8\" width=\"1.5\" fill=\"#808285\" transform=\"matrix(0.4998,0.8661,-0.8661,0.4998,21.8598,6.145) \" y=\"18\" x=\"4.359\"/></g>\n        <g><rect height=\"8\" width=\"1.5\" fill=\"#939598\" transform=\"matrix(0.866,0.5,-0.5,0.866,14.5359,-1.4651) \" y=\"22.392\" x=\"8.752\"/></g>\n        <g><rect height=\"8\" width=\"1.5\" fill=\"#A7A9AC\" y=\"24\" x=\"14.752\"/></g>\n        <g><rect height=\"1.5\" width=\"8\" fill=\"#BCBEC0\" transform=\"matrix(0.5001,0.866,-0.866,0.5001,33.8526,-5.8603) \" y=\"25.141\" x=\"18.003\"/></g>\n        <g><rect height=\"1.5\" width=\"8\" fill=\"#D1D3D4\" transform=\"matrix(0.8661,0.4998,-0.4998,0.8661,14.5287,-10.2476) \" y=\"20.747\" x=\"22.394\"/></g>\n        <g><rect height=\"1.5\" width=\"8\" fill=\"#E6E7E8\" y=\"14.747\" x=\"24.001\"/></g>\n        <g><rect height=\"8\" width=\"1.5\" fill=\"#E6E7E8\" transform=\"matrix(0.5,0.866,-0.866,0.5,21.8536,-17.8577) \" y=\"5.997\" x=\"25.142\"/></g>\n        <g><rect height=\"8\" width=\"1.5\" fill=\"#E6E7E8\" transform=\"matrix(0.8663,0.4995,-0.4995,0.8663,5.7417,-10.2399) \" y=\"1.606\" x=\"20.749\"/></g>\n        <animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"rotate\" from=\"0 16 16\" to=\"360 16 16\" begin=\"0s\" dur=\"1s\" repeatCount=\"indefinite\"/>\n      </g>\n    </svg>\n  </div>\n</div>");
  
});

Ember.TEMPLATES["greek_word"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("[Greek word template]");
  
});

Ember.TEMPLATES["verse"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div>\n	[Verse template]\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "verse", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  \n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>");
  return buffer;
  
});