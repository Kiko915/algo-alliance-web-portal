import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function PendingApprovals({ count }) {
  return (
    <Card className="rounded-xl shadow">
      <CardHeader>
        <CardTitle className="text-base">Pending Approvals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-semibold text-gray-900">{count}</div>
        <p className="text-sm text-gray-500">Users awaiting approval</p>
      </CardContent>
    </Card>
  );
}