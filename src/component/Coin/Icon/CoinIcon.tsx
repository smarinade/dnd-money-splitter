import { PlatinumIcon } from "./PlatinumIcon";
import { GoldIcon } from "./GoldIcon";
import { ElectrumIcon } from "./ElectrumIcon";
import { SilverIcon } from "./SilverIcon";
import { CopperIcon } from "./CopperIcon";

type Props = {
  type: 'platinum' | 'gold' | 'electrum' | 'silver' | 'copper'
}

function getIcon(type: string) {
  switch (type) {
    case 'platinum':
      return <PlatinumIcon></PlatinumIcon>
    case 'gold':
      return <GoldIcon></GoldIcon>
    case 'electrum':
      return <ElectrumIcon></ElectrumIcon>
    case 'silver':
      return <SilverIcon></SilverIcon>
    case 'copper':
      return <CopperIcon></CopperIcon>
  }
  return <button>Test</button>
}

export const CoinIcon = ({ type }: Props) => getIcon(type)
