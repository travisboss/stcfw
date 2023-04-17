import { c as create_ssr_component, i as each, j as escape } from "../../chunks/index-8b75e422.js";
const Volunteer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = [
    { name: "Event set up (lifting required)" },
    { name: "Event area security" },
    { name: "Event logistics" },
    { name: "Event activities" },
    {
      name: "Event take down (lifting required)"
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>Volunteer</title>`, ""}`, ""}

<div class="${"hero bg-base-200 pt-6"}"><div class="${"hero-content"}"><div class="${"max-w-4xl"}"><p class="${"italic"}">People make it happen! Countless hours of planning and hard work bring smiles to tens of
				thousands of faces on July 4th. The entire event is organized by dedicated volunteers who
				give time and talents to make it all possible.
			</p>
			<h1 class="${"text-3xl font-bold pb-1"}">Volunteer (Opportunities)</h1>
			<ul>${each(items, (item) => {
    return `<li>${escape(item.name)}</li>`;
  })}</ul>
			<p class="${"pt-6"}">Please contact the St. Cloud Fireworks Committee <a class="${"link link-hover"}" href="${"tel:16128363635"}">(612) 836-3635</a>
				for volunteer opportunities or email us at
				<a class="${"link link-hover"}" href="${"mailto:scfireworks@gmail.com"}">scfireworks@gmail.com</a></p>
			<p class="${"pt-6"}"></p></div></div></div>`;
});
export { Volunteer as default };
