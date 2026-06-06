import { createClient } from "@supabase/supabase-js";
import { cache } from "react";
import type { Course } from "@/types/course";

type CourseRow = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
};

type CourseResult = {
  courses: Course[];
  error: string | null;
};

const getSupabaseClient = cache(() => {
  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error("Supabase environment variables are not configured.");
  }

  return createClient(url, anonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
});

function normalizeCourse(row: CourseRow): Course {
  return {
    id: row.id,
    title: row.title,
    progress: Math.min(100, Math.max(0, Number(row.progress) || 0)),
    iconName: row.icon_name,
    createdAt: row.created_at
  };
}

export async function getCourses(): Promise<CourseResult> {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("courses")
      .select("id,title,progress,icon_name,created_at")
      .order("created_at", { ascending: false });

    if (error) {
      return { courses: [], error: error.message };
    }

    return {
      courses: (data ?? []).map((row) => normalizeCourse(row as CourseRow)),
      error: null
    };
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to connect to the course database.";

    return { courses: [], error: message };
  }
}
