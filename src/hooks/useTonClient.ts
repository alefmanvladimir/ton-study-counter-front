import {useAsyncInitialize} from "./useAsyncInitialize";
import {TonClient} from "ton";

export function useTonClient(){
    return useAsyncInitialize(
        async () =>
            new TonClient({
                endpoint: `https://testnet.toncenter.com/api/v2/jsonRPC`,
                apiKey: 'a614c54998989b9687c2c3686f8a301c1773951ac1b1728b8b2fa736d69034f0'
            })
    )
}