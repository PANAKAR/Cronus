import {
    meta,
    starbucks,
    tesla,
    shopify,
    web,
    management,
    ad, 
    personalised_websites,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "services",
      title: "Collections",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      icon: web,
      title: "Social Media Strategy Development",
      description: "At DSB Media, we take a personalized approach to developing social media strategies for our clients."
    },
    {
      icon: management,
      title: "Social Media Management",
      description: "At DSB Media, we offer comprehensive account setup and management services to help you maximize your online presence and grow your business."
    },
    {
      icon: ad,
      title: "Social Media Advertising",
      description: "At DSB Media, we offer comprehensive social media advertising services to help you reach your target audience and grow your business."
    },
    {
      icon: personalised_websites,
      title: "Personalised Websites",
      description: "At DSB Media, we offer personalized Website for your business to help you grow more."
    },
  ];
  

  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Working with DSB Media has been an absolute pleasure! From the moment we started our partnership, they have been incredibly helpful and professional. Their social media strategy has helped us to grow our online presence significantly, and their community management has fostered meaningful interactions and relationships with our followers. We've seen a noticeable increase in website traffic and engagement since working with DSB Media, and we couldn't be happier with the results. We highly recommend their services to any business looking to succeed on social media.",
      name: "Maharaja Co",
      image: "https://image.lexica.art/full_jpg/03bd60c1-c905-4e04-a1e6-0e758de58968",
    },
    {
      testimonial:
        "DSB Media has been an invaluable partner for our business. Their social media advertising campaigns have helped us to reach a wider audience and drive tangible results for our business. The team at DSB Media is always professional and responsive, and they go above and beyond to ensure that our campaigns are running smoothly. Their expertise in social media analytics has also been a major asset, as they have provided us with valuable insights and recommendations for improvement based on data-driven analysis. Overall, we couldn't be happier with the results we've achieved through our partnership with DSB Media, and we highly recommend their services to any business looking to succeed on social media.",
      name: "Riddhi Siddhi",
      image: "https://image.lexica.art/full_jpg/6a45533c-bdd8-436b-ab37-0fe207fe2e08",
    },
    {
      testimonial:
        "It is been a pleasure working with DSB Media.",
      name: "Power Gaurd Systems",
      image: "https://image.lexica.art/full_jpg/1db47fcc-bdce-4d3d-b2e3-bc18246c9d8c",
    },
  ];
  
  export { services, experiences, testimonials };
