<div
    class="modal fade"
    id="aboutModal"
    tabindex="-1"
    aria-labelledby="aboutModalLabel"
    aria-hidden="true"
>
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="aboutModalLabel">About</h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                />
            </div>
            <img class="fluid" src="/img/tiny-cpu.jpeg" alt="tiny cpu" />
            <div class="modal-body">
                <p>A very simple 4 register CPU</p>
                <h4>Instructions</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Opcode</th>
                            <th scope="col">Options</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><code class="text-nowrap">LD Reg Val</code></th>
                            <td>
                                Reg:- Either <code>A</code> or <code>B</code>
                                <br />
                                Val:- Value between 0 and 7
                            </td>
                            <td
                                >Load a value between 0 and 7 into either
                                register A or B.</td
                            >
                        </tr>
                        <tr>
                            <th><code class="text-nowrap">OUT</code></th>
                            <td> - </td>
                            <td
                                >Copy the value of register <code>A</code> to
                                the <code>OUT</code> register.</td
                            >
                        </tr>
                        <tr>
                            <th><code class="text-nowrap">ADD Reg</code></th>
                            <td>
                                Reg:- register to store the result. Either <code
                                    >A</code
                                >, <code>B</code> or <code>X</code>.</td
                            >
                            <td
                                >Add the value of registers A and B and place
                                the result in either register A or B. If the
                                value overflows the register the carry flag is
                                set. If you only want to update the flags
                                register and discard the result use X.
                            </td>
                        </tr>
                        <tr>
                            <th><code class="text-nowrap">SUB Reg</code></th>
                            <td>
                                Reg:- register to store the result. Either <code
                                    >A</code
                                >, <code>B</code> or <code>X</code>.</td
                            >
                            <td
                                >Subtract the value of registers A and B and
                                place the result in either register A or B. If
                                the value underflows the register the carry flag
                                is unset. If you only want to update the flags
                                register and discard the result use X.
                            </td>
                        </tr>
                        <tr>
                            <th><code class="text-nowrap">JP C? Adr</code></th>
                            <td>
                                C:- Include to jump only if the carry flag is
                                set<br />
                                Adr:- Address to jump to</td
                            >
                            <td>Jump to a particular address.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
