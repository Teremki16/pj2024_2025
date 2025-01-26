using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerAnim : MonoBehaviour
{
    public static readonly string[] idleAnim =
    {
        "IdleN",
        "IdleNW",
        "IdleW",
        "IdleSW",
        "IdleS",
        "IdleSE",
        "IdleE",
        "IdleNE"
    };
    public static readonly string[] runAnim =
    {
        "RunN",
        "RunNW",
        "RunW",
        "RunSW",       
        "RunS",
        "RunSE",
        "RunE",
        "RunNE"
    };
    Animator anim;
    int lastDir;

    private void Awake()
    {
        anim = GetComponent<Animator>();
    }
    public void SetDir(Vector2 dir)
    {
        string[] dirArray = null;
        if(dir.magnitude <0.2)
        {
            dirArray = idleAnim;
            lastDir = DirToIndex(dir);
            anim.Play(dirArray[lastDir]);
        }
        else
        {
            dirArray = runAnim;
            lastDir = DirToIndex(dir);
            anim.Play(dirArray[lastDir]);
        }
    }

    private int DirToIndex(Vector2 dir)
    {
        Vector2 norDir = dir.normalized;
        float step = 360 / 8;
        float offset = step / 2;
        float angle = Vector2.SignedAngle(Vector2.up, norDir);
        angle += offset;
        if (angle < 0) angle += 360;
        float stepCount = angle / step;
        return Mathf.FloorToInt(stepCount) ;
    }
}
