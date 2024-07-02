"use client";
import React from "react";
import axios from "axios";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SubmitingAnimation } from "../svgs/submitingAnimation";
const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }).max(50),
  email: z.string().min(2, { message: "Email is required." }).max(50),
  date: z.object({
    from: z.date({ required_error: "Error from" }).optional(),
    to: z.date({ required_error: "Error to" }).optional(),
  }),
  numberOfPeople: z
    .string()
    .min(1, { message: "Number of people is required." })
    .max(50),
  occasion: z.string().min(2, { message: "Type of occasion is required." }),
  message: z.string().min(2, { message: "Message is required." }),
});
export const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      numberOfPeople: "0",
      occasion: "",
      date: {
        from: undefined,
        to: undefined,
      },
      message: "",
    },
  });
  const isSubmiting = form.formState.isSubmitting;
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    try {
      //TESTING ERROR STATE , REMOVE
      if (values.name === "error") {
        throw new Error("bla");
      }
      await axios.post("/api/mail", { ...values });
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
                  <Input placeholder="Ime Prezime" {...field} />
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
                    placeholder="vaš.email@gmail.com"
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
          name="occasion"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Vrsta Eventa</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Odaberite vrstu prigode" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Proslave i Eventi">
                    Proslave i Eventi
                  </SelectItem>
                  <SelectItem value="Vikend getaway za obitelj i prijatelje">
                    Vikend getaway za obitelj i prijatelje
                  </SelectItem>
                  <SelectItem value="Djevojačke zabave">
                    Djevojačke zabave
                  </SelectItem>
                  <SelectItem value="U poruci opis">
                    Napišem u poruci
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Vrsta eventa, u slučaju da je nešto drugo napišite u poruci
                ispod. ispod.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numberOfPeople"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Broj Osoba</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Odaberite broj osoba" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="7">7</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="9">9</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="11">11</SelectItem>
                  <SelectItem value="12">12</SelectItem>
                  <SelectItem value="13">13</SelectItem>
                  <SelectItem value="14">14</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="16">16</SelectItem>
                  <SelectItem value="17">17</SelectItem>
                  <SelectItem value="18">18</SelectItem>
                  <SelectItem value="19">19</SelectItem>
                  <SelectItem value="20+">20+</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Broj osoba</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-xl">
                Datum željene rezervacije
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
                Odaberite datum ili raspon dana željene rezervacije.
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
                  rows={6}
                  {...field}
                />
              </FormControl>
              <FormDescription>Vaša poruka.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {isSubmiting ? (
          <SubmitingAnimation />
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </form>
    </Form>
  );
};
