using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PanelController : MonoBehaviour
{
    public GameObject panelToShow;
    public GameObject panelToHide;

    public void ShowPanel()
    {
        if (panelToHide != null)
            panelToHide.SetActive(false);

        if (panelToShow != null)
            panelToShow.SetActive(true);
    }
}
