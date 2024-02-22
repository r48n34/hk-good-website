import { TextInput, rem } from "@mantine/core";
import { Spotlight, SpotlightActionGroupData, SpotlightActionData, spotlight } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons-react";
import { dataArrGen } from "../data/tempData";

function SpotLightSearch({ ...props }: any) {

    const actions: (SpotlightActionGroupData | SpotlightActionData)[] = [
        {
            group: 'Pages',
            actions: dataArrGen.map( v => ({
                id: v.src,
                label: v.title,
                description: `${v.title} - ${v.tags.join(", ")}`,
                onClick: () => window.open(v.src, '_blank'),
            }))
        },
    ];

    return (
        <>
        <Spotlight
            actions={actions}
            nothingFound="Nothing found..."
            highlightQuery
            shortcut={['mod + K', 'mod + P']}
            limit={6}
            searchProps={{
                leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
                placeholder: 'Search...',
            }}
        />

        <TextInput
            {...props}
            onClick={() => {
                spotlight.open()
            }}
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />}
        />

        </>
    )
}

export default SpotLightSearch
