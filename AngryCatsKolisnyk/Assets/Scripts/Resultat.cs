using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
public class Resultat : MonoBehaviour
{
    float curlvltime = 0;
    [SerializeField] TextMeshProUGUI txt;
    private void Tick()
    {
        curlvltime += 0.1f;
        txt.SetText(string.Format("{0:N1} s", curlvltime));
    }
    public void StartWatch()
    {
        InvokeRepeating(nameof(Tick),0f,0.1f);
    }
    public void stopwatch()
    {
        CancelInvoke();
    }
}