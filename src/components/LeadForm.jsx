import { useState } from 'react';

const init = { name: '', phone: '', city: '', type: '', need: '' };

export default function LeadForm({ title = '提交咨询信息', compact = false }) {
  const [form, setForm] = useState(init);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  function setField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setStatus(null);
  }

  function submit(e) {
    e.preventDefault();
    const phone = form.phone.trim();
    if (!form.name.trim()) return setStatus({ type: 'error', text: '请填写姓名，方便品牌顾问称呼你。' });
    if (!phone) return setStatus({ type: 'error', text: '请填写手机号码，方便后续发送资料。' });
    if (!/^1[3-9]\d{9}$/.test(phone)) return setStatus({ type: 'error', text: '手机号格式不正确，请检查后重新填写。' });
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setStatus({ type: 'success', text: '已收到咨询信息，品牌顾问会尽快联系你并发送对应资料。' });
      setForm(init);
    }, 650);
  }

  return (
    <form className={`lead-form ${compact ? 'compact' : ''}`} onSubmit={submit}>
      <div className="form-heading">
        <span>CONSULTATION</span>
        <h3>{title}</h3>
        <p>填写基础信息，获取品牌介绍、产品资料与合作模式说明。</p>
      </div>
      <label>
        姓名
        <input value={form.name} onChange={(e) => setField('name', e.target.value)} placeholder="请输入姓名" autoComplete="name" />
      </label>
      <label>
        手机
        <input value={form.phone} onChange={(e) => setField('phone', e.target.value)} placeholder="请输入手机号" inputMode="tel" autoComplete="tel" />
      </label>
      <label>
        城市
        <input value={form.city} onChange={(e) => setField('city', e.target.value)} placeholder="如：长沙" autoComplete="address-level2" />
      </label>
      <label>
        门店类型
        <select value={form.type} onChange={(e) => setField('type', e.target.value)}>
          <option value="">请选择</option>
          <option>美容院</option>
          <option>养发馆</option>
          <option>皮肤管理</option>
          <option>头皮管理</option>
          <option>准备创业</option>
          <option>其他</option>
        </select>
      </label>
      <label className="span-2">
        咨询需求
        <textarea value={form.need} onChange={(e) => setField('need', e.target.value)} placeholder="想了解品牌资料、产品体系、合作模式或门店导入建议" rows="4" />
      </label>
      <p className="form-note">当前为前端模拟提交，不会连接真实线索渠道。</p>
      <button disabled={loading} type="submit">{loading ? '提交中...' : '提交咨询'}</button>
      {status && <div className={`form-status ${status.type}`}>{status.text}</div>}
    </form>
  );
}
