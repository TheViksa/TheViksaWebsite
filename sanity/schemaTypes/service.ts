import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Usluga",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Ime Usluge",
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
      name: "description",
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
      name: "body",
      title: "Blog tekst",
      type: "blockContent",
      validation: (rule) =>
        rule
          .required()
          .error("Opis usluge, šta se nudi od kada do kada i tako to."),
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
