var transforms = {
	"main":[
		{"tag":"div","children":[
			{"tag":"span","html":"${Section}"},
			{"tag":"div","children":function(){
				return(json2html.transform(this.terms, transforms.term));
			}}
		]}
	],
	"term":[
		{"tag":"p","html":"<span class=\"myClass\">${Term}</span>"},
		{"tag":"p","html":"${Definition}"}
	]
}
