export type RAIDResult = {
  totalSize: number;
  speedGain: number;
  faultTolerance: string;
  error: string;
};

export function calculateRAID(
  raidType: string,
  diskSize: number,
  diskCount: number
): RAIDResult {
  switch (raidType) {
    case "RAID 0 (Stripe Set)":
      return calculateRAID0(diskSize, diskCount);
    case "RAID 1 (Mirror)":
      return calculateRAID1(diskSize, diskCount);
    case "RAID 1E":
      return calculateRAID1E(diskSize, diskCount);
    case "RAID 5 (Parity)":
      return calculateRAID5(diskSize, diskCount);
    case "RAID 50 (5+0)":
      return calculateRAID50(diskSize, diskCount);
    case "RAID 5E (Parity+Spare)":
      return calculateRAID5E(diskSize, diskCount);
    case "RAID 5EE (Parity+Spare)":
      return calculateRAID5EE(diskSize, diskCount);
    case "RAID 10 (Mirror+Spare)":
      return calculateRAID10(diskSize, diskCount);
    case "RAID 6 (Double Parity)":
      return calculateRAID6(diskSize, diskCount);
    case "RAID 60 (6+0)":
      return calculateRAID60(diskSize, diskCount);
    default:
      return {
        totalSize: 0,
        speedGain: 0,
        faultTolerance: "",
        error: "Invalid RAID type",
      };
  }
}

function calculateRAID0(diskSize: number, diskCount: number): RAIDResult {
  return {
    totalSize: diskSize * diskCount,
    speedGain: diskCount, // TODO: Check this
    faultTolerance: "None",
    error: "",
  };
}

function calculateRAID1(diskSize: number, diskCount: number): RAIDResult {
  return {
    totalSize: diskSize * (diskCount / 2),
    speedGain: diskCount, // TODO: Check this
    faultTolerance: "1 disk",
    error: diskCount % 2 !== 0 ? "Even number of disks required" : "",
  };
}

function calculateRAID1E(diskSize: number, diskCount: number): RAIDResult {
  return {
    totalSize: diskSize,
    speedGain: 1,
    faultTolerance: "1 disk",
    error: "",
  };
}

function calculateRAID5(diskSize: number, diskCount: number): RAIDResult {
  return {
    totalSize: diskSize * (diskCount - 1),
    speedGain: diskCount - 1, // TODO: Check this
    faultTolerance: "1 disk",
    error: diskCount < 3 ? "Minimum 3 disks required" : "",
  };
}

function calculateRAID50(diskSize: number, diskCount: number): RAIDResult {
  return {
    totalSize: diskSize * (diskCount - diskCount / 5),
    speedGain: diskCount - 1, // TODO: Check this
    faultTolerance: "1 disk per RAID 5",
    error: diskCount < 6 ? "Minimum 6 disks required" : "",
  };
}

function calculateRAID5E(diskSize: number, diskCount: number): RAIDResult {
  return {
    totalSize: diskSize * (diskCount - 2),
    speedGain: diskCount - 2,
    faultTolerance: "1 disk",
    error: "",
  };
}

function calculateRAID5EE(diskSize: number, diskCount: number): RAIDResult {
  return {
    totalSize: diskSize * (diskCount - 2),
    speedGain: diskCount - 2,
    faultTolerance: "1 disk",
    error: "",
  };
}

function calculateRAID10(diskSize: number, diskCount: number): RAIDResult {
  return {
    totalSize: diskSize * (diskCount / 2),
    speedGain: diskCount / 2, // TODO: Check this
    faultTolerance: "1 disk per RAID 1",
    error: diskCount % 2 !== 0 ? "Even number of disks required" : "",
  };
}

function calculateRAID6(diskSize: number, diskCount: number): RAIDResult {
  return {
    totalSize: diskSize * (diskCount - 2),
    speedGain: diskCount - 2, // TODO: Check this
    faultTolerance: "2 disks",
    error: diskCount < 4 ? "Minimum 4 disks required" : "",
  };
}

function calculateRAID60(diskSize: number, diskCount: number): RAIDResult {
  return {
    totalSize: diskSize * (diskCount - (2 * diskCount) / 6),
    speedGain: diskCount - 2, // TODO: Check this
    faultTolerance: "2 disks per RAID 6",
    error: diskCount < 8 ? "Minimum 8 disks required" : "",
  };
}
