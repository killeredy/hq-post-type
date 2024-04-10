import { SelectControl, RangeControl, Button } from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";


export default function BoxesEdit({ box, setBox, remove }) {
    const { pages } = data;
    const [marks, setMarks] = useState([]);
    const [selPages, setSelPages] = useState([]);

    useEffect(() => {
        let mark = [];
        for (let i = 1; i <= 12; i++) {
            mark.push({
                value: i,
                label: i.toString(),
            })
        }
        setMarks(mark);

        const selPages = pages.map((pg) => {
            return {
                label: pg.post_title,
                value: pg.ID,
            }
        })

        setSelPages(selPages);
    }, [])


    return (
        <div style={{ padding: "0 3rem" }}>
            <SelectControl
                label={"Select page"}
                value={box.postId}
                onChange={(e) => { setBox([e, 'postId']) }}
                options={selPages}

            />
            <RangeControl
                label="Widtth"
                help="Additional info about this."
                step={1}
                withInputField={false}
                marks={marks}
                value={box.width}
                onChange={(e) => setBox([e, 'width'])}
                min={1}
                max={12}
            />
            <RangeControl
                label="Heigth"
                help="Additional info about this."
                step={1}
                withInputField={false}
                marks={marks}
                value={box.height}
                onChange={(e) => setBox([e, 'height'])}
                min={1}
                max={8}
            />
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <Button className="btn-remove" onClick={(e) => remove()} >
                    Remove Box
                </Button>
            </div>
        </div>

    )
}