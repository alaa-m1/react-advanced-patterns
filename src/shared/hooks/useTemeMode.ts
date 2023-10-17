import { useRecoilState } from "recoil"
import { themeModeAtom } from "states"

export const useThemeMode=()=>{
    return useRecoilState(themeModeAtom)
}