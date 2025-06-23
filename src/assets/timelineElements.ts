import edition2 from "../assets/03-18-edition-2.png"
import edition1 from "../assets/02-19-edition-1.png"

const timelineElements = [
    {
      id: "edition-1",
      title: "Edition 1",
      location: "Hide&Seek, Brooklyn, NY",
      description: "Extended happy hour concert featuring local artists",
      date: "Feb 2025",
      icon: "work",
      color: "purple",
      poster: edition1,
    },
    {
      id: "edition-2",
      title: "Edition 2",
      location: "FourFiveSix, Brooklyn, NY",
      description:
        "An extended happy hour concert featuring local artists and lyrical experimentation. Suggested donation of $10. Free entry.",
      date: "Mar 2025",
      icon: "work",
      color: "purple",
      poster: edition2,
    },
  ];
  
  export default timelineElements.reverse();