import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import workOne from "./workOne";
import workTwo from "./workTwo";
import workThree from "./workThree";
import workSeven from "./workSeven";
import services from "./services";
import portfolio from "./portfolio";
import BlogPost from "./BlogPost";
import BlogCard from "./BlogCard";
import PriceCard from "./PriceCard";
import priceAccordion from "./priceAccordion";
import contact from "./contact";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    workOne,
    workTwo,
    workThree,
    workSeven,
    services,
    portfolio,
    BlogPost,
    BlogCard,
    PriceCard,
    priceAccordion,
    contact,
  ]),
});
