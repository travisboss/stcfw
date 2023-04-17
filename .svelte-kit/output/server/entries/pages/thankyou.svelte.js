import { c as create_ssr_component, i as each, j as escape } from "../../chunks/index-8b75e422.js";
const Thankyou = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lists = [
    { item: "St. Cloud Police Department" },
    { item: "St. Cloud Fire Department" },
    { item: "Sauk Rapids Police Department" },
    { item: "Stearns County Sheriff" },
    { item: "Benton County Sheriff" },
    { item: "Mayo Clinic Ambulance" },
    { item: "St. Cloud Parks Department" },
    { item: "St. Cloud Public Works" },
    { item: "St. Cloud Streets Department" },
    {
      item: "1st Combined Arms Battalion, 194th Armored Regiment"
    },
    { item: "U.S. Army National Guard" },
    { item: "MN DNR" },
    { item: "All Event Volunteers" },
    {
      item: "St. Cloud Police Benefits Association"
    },
    { item: "CentraCare" }
  ];
  return `${$$result.head += `${$$result.title = `<title>Thank You</title>`, ""}`, ""}

<div class="${"hero min-h-0 bg-base-200"}"><div class="${"hero-content text-center"}"><div class="${"max-w-xl"}"><h2 class="${"py-6 text-2xl"}">Thank You!</h2>
			<ul class="${"list-disc"}">${each(lists, (list) => {
    return `<li>${escape(list.item)}</li>`;
  })}</ul></div></div></div>`;
});
export { Thankyou as default };
