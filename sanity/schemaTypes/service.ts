import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Usluga",
  type: "document",
  fields: [
    defineField({
      name: "hr_title",
      title: "Ime Usluge",
      type: "string",
      validation: (rule) =>
        rule.required().error("Daj ime usluge. Mozeš ti to 💪."),
    }),
    defineField({
      name: "en_title",
      title: "[Eng] Ime Usluge",
      type: "string",
      validation: (rule) =>
        rule.required().error("Daj ime usluge. Mozeš ti to 💪."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required().error("Slug vrlo bitan."),
    }),
    defineField({
      name: "hr_description",
      title: "Opis",
      type: "text",
      validation: (rule) => [
        rule
          .required()
          .min(20)
          .error("Nemoj škrtariti na opisu, min 20 riječi."),
        rule.max(300).warning("Brate pretjerao si, do 300 riječi."),
      ],
    }),
    defineField({
      name: "en_description",
      title: "[Eng] Opis",
      type: "text",
      validation: (rule) => [
        rule
          .required()
          .min(20)
          .error("Nemoj škrtariti na opisu, min 20 riječi."),
        rule.max(300).warning("Brate pretjerao si, do 300 riječi."),
      ],
    }),
    defineField({
      name: "image",
      title: "Slika",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "hr_body",
      title: "Blog tekst",
      type: "blockContent",
      validation: (rule) =>
        rule
          .required()
          .error("Opis usluge, šta se nudi od kada do kada i tako to."),
    }),
    defineField({
      name: "en_body",
      title: "[Eng] Blog tekst",
      type: "blockContent",
      validation: (rule) =>
        rule
          .required()
          .error("Opis usluge, šta se nudi od kada do kada i tako to."),
    }),
  ],

  preview: {
    select: {
      title: "hr_title",
      media: "image",
    },
  },
});
