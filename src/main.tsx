import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invoices from "./routes/invoices.tsx";
import SelectInvoice from "./pages/SelectInvoice/SelectInvoice.tsx";
import Invoice from "./routes/invoice.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import "./style/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invoices />}>
          <Route index element={<SelectInvoice />} />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
