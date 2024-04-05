"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { addDays, format } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { DateRange } from "react-day-picker";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";
const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }).max(50),
  email: z.string().min(2, { message: "Email is required" }).max(50),
  date: z.object({
    from: z.date({ required_error: "Error from" }).optional(),
    to: z.date({ required_error: "Error to" }).optional(),
  }),
  message: z.string().min(2, { message: "Message is required." }),
});
export const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      date: {
        from: undefined,
        to: undefined,
      },
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    try {
      //TESTING ERROR STATE , REMOVE
      if (values.name === "error") {
        throw new Error("bla");
      }
      toast({
        description: "Poruka poslana. 🙂",
      });
      form.reset();
    } catch (error) {
      toast({
        description: "Nešto je pošlo po krivom.Pokušajte ponovo.",
        variant: "destructive",
      });
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-4 w-full"
      >
        <FormField
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xl">Ime i Prezime</FormLabel>
                <FormControl>
                  <Input placeholder="Pero Perić" {...field} />
                </FormControl>
                <FormDescription>Vaše Ime i Prezime</FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xl">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="pero.peric@gmail.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Vaša email adresa na koju ćemo vam odgovorit.
                </FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-xl">
                Datum Zeljene Rezervacije
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-[300px] justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value?.from ? (
                        field.value.to ? (
                          <>
                            {format(field.value.from, "LLL dd, y")} -{" "}
                            {format(field.value.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(field.value.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={field?.value?.from}
                    //@ts-ignore
                    selected={field.value}
                    onSelect={field.onChange}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Odaberite datum ili raspon dana zeljene rezervacije.
              </FormDescription>
              <FormDescription>
                Ostavite prazno ako samo informativno kontaktirate.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Poruka</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Vaša Poruka"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>Vaša poruka.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
