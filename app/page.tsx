import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { getCourses } from "@/lib/courses";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { courses, error } = await getCourses();

  return <DashboardShell courses={courses} coursesError={error} />;
}
