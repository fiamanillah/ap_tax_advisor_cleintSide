import Icon from "../Shared/Icon";

const ComparisonTable = () => {
  return (
    <table className="mx-auto w-full max-w-3xl">
      <thead>
        <tr className="flex h-16 gap-1">
          <th className="w-[253px] px-6 py-3 text-left text-xs font-medium"></th>
          <th className="text-muted-foreground flex w-[230px] items-center bg-[#E6E6E6] px-4 text-center text-base font-medium">
            Typical Accountant
          </th>
          <th className="text-muted-foreground flex w-[317px] items-center bg-[#A4F5D3] px-4 text-center text-base font-medium">
            AP Tax Advisors
          </th>
        </tr>
      </thead>
      <tbody className="">
        <tr className="flex h-16 gap-1">
          <td className="text-muted-foreground flex w-[253px] items-center bg-[#EDFDF6] px-4 text-sm">
            ✅ Files your return
          </td>
          <td className="text-muted-foreground flex w-[230px] items-center bg-[#FAFAFA] px-4 text-sm">
            <span className="flex gap-2">
              <Icon src="/icons/check.svg" className="mt-1.5" />
              <span>Yes - when it’s due</span>
            </span>
          </td>
          <td className="text-muted-foreground flex w-[317px] items-center gap-2 bg-[#EDFDF6] px-4 text-sm">
            <span className="flex gap-2">
              <Icon src="/icons/check.svg" className="mt-1.5" />
              <span>Yes - and plans around it</span>
            </span>
          </td>
        </tr>

        <tr className="flex h-16 gap-1">
          <td className="text-muted-foreground flex w-[253px] items-center bg-[#DBFBED] px-4 text-sm">
            ✅ Files your return
          </td>
          <td className="text-muted-foreground flex w-[230px] items-center gap-2 bg-[#F2F2F2] px-4 text-sm">
            <span className="flex gap-2">
              <Icon src="/icons/cross.svg" className="mt-1.5" />
              <span>Yes - when it’s due</span>
            </span>
          </td>
          <td className="text-muted-foreground flex w-[317px] items-center gap-2 bg-[#DBFBED] px-4 text-sm">
            <span className="flex gap-2">
              <Icon src="/icons/check.svg" className="mt-1.5" />
              <span>Yes - we proactively flag risks and opportunities</span>
            </span>
          </td>
        </tr>

        <tr className="flex h-16 gap-1">
          <td className="text-muted-foreground flex w-[253px] items-center bg-[#EDFDF6] px-4 text-sm">
            🌍 International & cross border
          </td>
          <td className="text-muted-foreground flex w-[230px] items-center gap-2 bg-[#FAFAFA] px-4 text-sm">
            <span className="flex gap-2">
              <Icon src="/icons/cross.svg" className="mt-1.5" />
              <span>No - basic or needs to be requested</span>
            </span>
          </td>
          <td className="text-muted-foreground flex w-[317px] items-center gap-2 bg-[#EDFDF6] px-4 text-sm">
            <span className="flex gap-2">
              <Icon src="/icons/check.svg" className="mt-1.5" />
              <span>Yes - core specialism (tax residency, offshore, etc.)</span>
            </span>
          </td>
        </tr>

        <tr className="flex h-16 gap-1">
          <td className="text-muted-foreground flex w-[253px] items-center bg-[#DBFBED] px-4 text-sm">
            ⚙️ Profit extraction
          </td>
          <td className="text-muted-foreground flex w-[230px] items-center gap-2 bg-[#F2F2F2] px-4 text-sm">
            <span className="flex gap-2">
              <Icon src="/icons/cross.svg" className="mt-1.5" />
              <span>No - basic or missed</span>
            </span>
          </td>
          <td className="text-muted-foreground flex w-[317px] items-center gap-2 bg-[#DBFBED] px-4 text-sm">
            <span className="flex gap-2">
              <Icon src="/icons/check.svg" className="mt-1.5" />
              <span>Yes - Structured for maximum tax efficiency</span>
            </span>
          </td>
        </tr>

        <tr className="flex h-16 gap-1">
          <td className="text-muted-foreground flex w-[253px] items-center bg-[#EDFDF6] px-4 text-sm">
            🗓️ Year-round support
          </td>
          <td className="text-muted-foreground flex w-[230px] items-center gap-2 bg-[#FAFAFA] px-4 text-sm">
            <span className="flex gap-2">
              <Icon src="/icons/cross.svg" className="mt-1.5" />
              <span>No - tax season only</span>
            </span>
          </td>
          <td className="text-muted-foreground flex w-[317px] items-center gap-2 bg-[#EDFDF6] px-4 text-sm">
            <span className="flex gap-2">
              <Icon src="/icons/check.svg" className="mt-1.5" />
              <span>Yes - available when you need us</span>
            </span>
          </td>
        </tr>

        <tr className="flex h-16 gap-1">
          <td className="text-muted-foreground flex w-[253px] items-center bg-[#DBFBED] px-4 text-sm">
            👨‍🏫 Qualified specialists
          </td>
          <td className="text-muted-foreground flex w-[230px] items-center gap-2 bg-[#F2F2F2] px-4 text-sm">
            <span className="flex gap-2">
              <Icon src="/icons/cross.svg" className="mt-1.5" />
              <span>No - not always tax qualified</span>
            </span>
          </td>
          <td className="text-muted-foreground flex w-[317px] items-center gap-2 bg-[#DBFBED] px-4 text-sm">
            <span className="flex gap-2">
              <Icon src="/icons/check.svg" className="mt-1.5" />
              <span>Yes - all advice from Chartered Tax Advisers (CTA)</span>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ComparisonTable;
