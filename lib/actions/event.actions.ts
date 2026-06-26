"use server";

import Event from "@/database/event.model";
import connectDB from "../mongodb";

export const getSilimarEventsBySlug = async (slug: string) => {
  try {
    await connectDB();
    const event = await Event.findOne({ slug });

    return await Event.find({
      _id: { $ne: event._id },
      tags: { $in: event.tags },
    }).lean();
  } catch (error) {
    return [];
  }
};
